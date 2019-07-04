import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Spring } from 'react-spring/renderprops'
import Button2 from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
//import { format } from 'date-fns'
import Buttons from './buttonNavigationVideo'
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import LocalMall from '@material-ui/icons/LocalMall';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import LocalDrink from '@material-ui/icons/LocalDrink'
import DateRange from '@material-ui/icons/DateRange'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';
import { format } from 'date-fns'

/***************************************/

class App extends Component
{
  constructor ( props )
  {
    super( props )
    this.booksWasteFunction();
  }
  state = {
    statisticsPoids: {
      total: 0,
      plastique: 0,
      papier: 0,
      verre: 0,
      organique: 0,
      metal: 0,
    },
    statisticsNiveau: {
      total: 0,
      plastique: 0,
      papier: 0,
      verre: 0,
      organique: 0,
      metal: 0,
    },
    booksWaste: [],
    books: [],
    editBookData: { id: '', type: '', poids: '', niveau: '', date_creation: '', id_dechets: '' },
    newBookModal: false,
    editBookModal: false
  }
  /***************************************/
  componentWillMount ()
  {
    this._refreshBooks();
  }
  /***************************************/
  toggleNewBookModal ()
  {
    this.setState( {
      newBookModal: !this.state.newBookModal
    } );
  }
  /***************************************/
  toggleEditBookModal ()
  {
    this.setState( {
      editBookModal: !this.state.editBookModal
    } );
  }
  /***************************************/
  handleChange = prop => event =>
  {
    this.setState( { [ prop ]: event.target.value } );
  };
  /***************************************/
  handleClickShowPassword = () =>
  {
    this.setState( state => ( { showPassword: !state.showPassword } ) );
  };
  /***************************************/
  updateBook ()
  {

    let { type, poids, date_creation, id_dechets, niveau } = this.state.editBookData;
    axios.put( 'http://localhost:8000/api/updaterec/' + this.state.editBookData.id, { type, poids, date_creation, id_dechets, niveau } )
      .then( ( response ) =>
      {
        this._refreshBooks();
      } );
    this.setState( { editBookModal: false, editBookData: { id: '', type: '', poids: '', niveau: '', date_creation: '' } } )

  }
  /***************************************/
  editBook ( book )
  {
    this.setState( {
      editBookData: book, editBookModal: !this.state.editBookModal
    } );
  }
  /***************************************/
  deleteBook ( id )
  {
    axios.delete( 'http://127.0.0.1:8000/api/delete/' + id ).then( ( response ) =>
    {
      this._refreshBooks();
    } );
  }
  /***************************************/
  _refreshBooks ()
  {
    axios.get( 'http://localhost:8000/api/resyc' ).then( ( response ) =>
    {
      this.setState( {
        books: response.data
      } )
      var total = this.state.books.length
      this.setState(
        {
          statisticsPoids:
          {
            total,
            papier: this.sumPoids( 'Papier' ),
            verre: this.sumPoids( 'Verre' ),
            organique: this.sumPoids( 'Organique' ),
            plastique: this.sumPoids( 'Plastique' ),
            metal: this.sumPoids( 'Metal' ),
          },
          statisticsNiveau:
          {
            total,
            papier: this.sumNiveau( 'Papier' ),
            verre: this.sumNiveau( 'Verre' ),
            organique: this.sumNiveau( 'Organique' ),
            plastique: this.sumNiveau( 'Plastique' ),
            metal: this.sumNiveau( 'Metal' ),
          },
        } )

    } );
  }


  booksWasteFunction ()
  {
    axios.get( 'http://localhost:8000/api/dech' ).then( ( response ) =>
    {
      this.setState( {
        booksWaste: response.data
      } )
    } );
  }
  /***************************************/
  sumPoids ( name )
  {
    var sum = 0;
    for ( var i = 0; i < this.state.books.length; ++i )
    {
      if ( this.state.books[ i ].type === name )
        sum = eval( sum ) + eval( this.state.books[ i ].poids )
    }
    return sum
  }
  /***************************************/
  sumNiveau ( name )
  {
    var sum = 0;
    for ( var i = 0; i < this.state.books.length; ++i )
    {
      if ( this.state.books[ i ].type === name )
        sum = eval( sum ) + eval( this.state.books[ i ].niveau )
    }
    return sum
  }
  /***************************************/


  /***************************************/
  // handleDateChange = date => {
  //   var birthday = new Date(date);
  //   //console.log(format(birthday, 'yyyy-MM-dd'))
  //   console.log(format(birthday, 'dd-MM-yyyy'))
  //   this.setState({ date_creation: format(birthday, 'dd-MM-yyyy') });
  // };

  render ()
  {
    const { classes } = this.props;

    return (
      <div className="App container" style={ { minWidth: '100%' } }>
        <Buttons statisticsPoids={ this.state.statisticsPoids } statisticsNiveau={ this.state.statisticsNiveau } />
        <Modal isOpen={ this.state.editBookModal } toggle={ this.toggleEditBookModal.bind( this ) } >
          <ModalHeader toggle={ this.toggleEditBookModal.bind( this ) }>changer  l'etat  des Déchets  </ModalHeader>
          <ModalBody >
            {/*******/ }
            <FormGroup>
              <Label for="title">Identifiant Dechet</Label>
              <TextField style={ { width: '100%' } }
                select variant="outlined" label="With Select" value={ this.state.editBookData.id_dechets } onChange={ ( e ) =>
                {
                  let { editBookData } = this.state; editBookData.id_dechets = e.target.value;
                  this.setState( { editBookData } );
                } }
                InputProps={ { startAdornment: <InputAdornment position="start"><DeleteSweep /></InputAdornment>, } }>
                { this.state.booksWaste.map( option => ( <MenuItem key={ option.id } value={ option.id }>{ option.id }-{ option.type }</MenuItem> ) ) }
              </TextField>
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Type du Déchets</Label>
              <TextField style={ { width: '100%' } }
                select variant="outlined" label="With Select" value={ this.state.editBookData.type } onChange={ ( e ) =>
                {
                  let { editBookData } = this.state; editBookData.type = e.target.value;
                  this.setState( { editBookData } );
                } }
                InputProps={ { startAdornment: <InputAdornment position="start"><DeleteSweep /></InputAdornment>, } }>
                { ranges.map( option => ( <MenuItem key={ option.value } value={ option.value }>{ option.label }</MenuItem> ) ) }
              </TextField>
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="rating">Poids</Label>
              <TextField style={ { width: '100%' } } value={ this.state.editBookData.poids } onChange={ ( e ) =>
              {
                let { editBookData } = this.state; editBookData.poids = e.target.value;
                this.setState( { editBookData } );
              } }
                variant="outlined" label="en (Kg)" InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } }
              />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Niveau Total</Label>
              <TextField style={ { width: '100%' } } value={ this.state.editBookData.niveau } onChange={ ( e ) =>
              {
                let { editBookData } = this.state; editBookData.niveau = e.target.value; this.setState( { editBookData } );
              } }
                variant="outlined" label="En (Metre Cube)" InputProps={ { startAdornment: <InputAdornment position="start"><LocalDrink /></InputAdornment> } }
              />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Type du Déchets</Label>
              <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                <DateTimePicker style={ { width: "99%" } }
                  autoOk label="Custom CSS" variant="outlined" value={ this.state.editBookData.date_creation } onChange={ ( date ) =>
                  {
                    let { editBookData } = this.state; editBookData.date_creation = format( date, 'dd-MM-yyyy' ); this.setState( { editBookData } );
                  } }
                  format="dd-MM-yyyy" InputProps={ { startAdornment: <InputAdornment position="start"><DateRange /></InputAdornment>, } }
                />
              </MuiPickersUtilsProvider>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button2 color="primary" onClick={ this.updateBook.bind( this ) }>Update Book</Button2>{ ' ' }
            <Button2 color="secondary" onClick={ this.toggleEditBookModal.bind( this ) }>Cancel</Button2>
          </ModalFooter>
        </Modal>
        <Spring from={ { opacity: 0, marginTop: '30px' } } to={ { opacity: 1, height: '440px', marginTop: '40px', marginBottom: '20px' } } config={ { delay: 500, duration: 700 } }>{ props => (
          <Paper className={ classes.root } style={ props } id="paperContainer">
            <Table2 className={ classes.table }>
              <TableHead>
                <TableRow>
                  <CustomTableCell align="center">Identifiant</CustomTableCell>
                  <CustomTableCell align="center">Type de Déchets</CustomTableCell>
                  <CustomTableCell align="center">Le Poids</CustomTableCell>
                  <CustomTableCell align="center">Le Niveau</CustomTableCell>
                  <CustomTableCell align="center">Date</CustomTableCell>
                  <CustomTableCell align="center">Actions</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody> { this.state.books.map( row => (
                <TableRow className={ classes.row } key={ row.id }>
                  <CustomTableCell align="center">{ row.id }</CustomTableCell>
                  <CustomTableCell align="center">{ row.type }</CustomTableCell>
                  <CustomTableCell align="center">{ row.poids }</CustomTableCell>
                  <CustomTableCell align="center">{ row.niveau }</CustomTableCell>
                  <CustomTableCell align="center">{ row.date_creation }</CustomTableCell>
                  <CustomTableCell align="center">
                    <IconButton className='button' onClick={ this.deleteBook.bind( this, row.id ) } aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton className='button' onClick={ this.editBook.bind( this, row ) } aria-label="Delete">
                      <EditIcon />
                    </IconButton>
                  </CustomTableCell>
                </TableRow> ) ) }
              </TableBody>
            </Table2>
          </Paper> ) }
        </Spring>
      </div>
    );
  }
}
/***************************************/
const styles = theme => ( {
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: '100%',
  },
  row: {
    '&:nth-of-type(odd)': { backgroundColor: theme.palette.background.default, },
  },
  container: {
    textAlign: 'center'
  },
} );
/***************************************/
const ranges = [
  {
    value: 'Verre',
    label: 'Verre',
  },
  {
    value: 'Metal',
    label: 'Métal',
  },
  {
    value: 'Plastique',
    label: 'Plastique',
  },
  {
    value: 'Organique',
    label: 'Organique',
  },
  {
    value: 'Papier',
    label: 'Papier',
  },
];
/***************************************/
const CustomTableCell = withStyles( theme => ( {
  head: {
    background: '#383234',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
  },
} ) )( TableCell );
const A8 = withStyles( styles )( App );
export default A8


