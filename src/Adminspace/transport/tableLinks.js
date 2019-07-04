
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
import Buttons from './buttonNavigationTransport'
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EvStation from '@material-ui/icons/EvStation'
import DateRange from '@material-ui/icons/DateRange'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';
import { format } from 'date-fns'
import classNames from 'classnames';
import Directions from '@material-ui/icons/Directions';

/***************************************/

class App extends Component
{

  state = {
    booksVehicule: [],
    books: [],
    editBookData: { id: 0, id_vehicule: '', distance: '', nbr_place: 1, date_creation: '', },
    newBookModal: false,
    editBookModal: false
  }
  /***************************************/
  componentWillMount ()
  {
    this._refreshBooks();
    this.booksVehicule();

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
  updateBook ()
  {
    let { id_vehicule, distance, nbr_place, date_creation, } = this.state.editBookData;
    axios.put( 'http://localhost:8000/api/modifierparcours/' + this.state.editBookData.id, { id_vehicule, distance, nbr_place, date_creation } )
      .then( ( response ) =>
      {
        this._refreshBooks();
        this.booksVehicule();
      } );
    this.setState( { editBookModal: false, editBookData: { id: 0, id_vehicule: '', distance: '', nbr_place: 1, date_creation: '' } } )





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
    // axios.delete('http://127.0.0.1:8000/api/delete/' + id).then((response) => {
    //   this._refreshBooks();
    // });
  }
  /***************************************/
  _refreshBooks ()
  {
    axios.get( 'http://localhost:8000/api/allparcours' ).then( ( response ) =>
    {
      this.setState( {
        books: response.data
      } )
    } );

  }
  /***************************************/
  // handleDateChange = date => {
  //   var birthday = new Date(date);
  //   //console.log(format(birthday, 'yyyy-MM-dd'))
  //   console.log(format(birthday, 'dd-MM-yyyy'))
  //   this.setState({ date_creation: format(birthday, 'dd-MM-yyyy') });
  // };
  booksVehicule ()
  {
    axios.get( 'http://localhost:8000/api/d' ).then( ( response ) =>
    {
      this.setState( {
        booksVehicule: response.data
      } )
    } );
  }

  render ()
  {
    const { classes } = this.props;

    return (
      <div className="App container" style={ { minWidth: '100%' } }>
        <Buttons />
        <Modal isOpen={ this.state.editBookModal } toggle={ this.toggleEditBookModal.bind( this ) } >
          <ModalHeader toggle={ this.toggleEditBookModal.bind( this ) }>changer  l'etat  des Déchets  </ModalHeader>
          <ModalBody >
            {/*******/ }
            <FormGroup>
              <Label for="rating">Le type de la Vehicule</Label>
              <TextField style={ { width: '100%' } }
                select className={ classNames( classes.fullWidth, classes.textField, classes.noPaddingMargin ) } variant="outlined" label="With Select"
                value={ this.state.editBookData.id_vehicule } onChange={ ( e ) => { let { editBookData } = this.state; editBookData.id_vehicule = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><EvStation /></InputAdornment>, } }>
                { this.state.booksVehicule.map( option => ( <MenuItem key={ option.id } value={ option.id }>{ option.id }</MenuItem> ) ) }
              </TextField>
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">la Distance</Label>
              <TextField style={ { width: '100%' } }
                id="outlined-simple-start-adornment" className={ classNames( classes.fullWidth, classes.textField ) } variant="outlined"
                value={ this.state.editBookData.distance } onChange={ ( e ) => { let { editBookData } = this.state; editBookData.distance = e.target.value; this.setState( { editBookData } ); } }
                label="En (Km)" InputProps={ { startAdornment: <InputAdornment position="start"><Directions /></InputAdornment>, } }
              />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Nombre</Label>
              <TextField style={ { width: '100%' } }
                id="outlined-number" className={ classNames( classes.fullWidth, classes.textField ) } type="number" variant="outlined"
                value={ this.state.editBookData.nbr_place } onChange={ ( e ) => { let { editBookData } = this.state; editBookData.nbr_place = e.target.value; this.setState( { editBookData } ); } }
                InputLabelProps={ { shrink: true, startAdornment: <InputAdornment position="start"><Directions /></InputAdornment> } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Date</Label>
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
                  <CustomTableCell align="center">La Véhicule</CustomTableCell>
                  <CustomTableCell align="center">La Distance </CustomTableCell>
                  <CustomTableCell align="center">Nombre </CustomTableCell>
                  <CustomTableCell align="center">Date</CustomTableCell>
                  <CustomTableCell align="center">Actions</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { this.state.books.map( row => (
                  <TableRow className={ classes.row } key={ row.id }>
                    <CustomTableCell align="center">{ row.id }</CustomTableCell>
                    <CustomTableCell align="center">{ row.id_vehicule }</CustomTableCell>
                    <CustomTableCell align="center">{ row.distance }</CustomTableCell>
                    <CustomTableCell align="center">{ row.nbr_place }</CustomTableCell>
                    <CustomTableCell align="center">{ row.date_creation }</CustomTableCell>

                    <CustomTableCell align="center">
                      <IconButton className='button' onClick={ this.deleteBook.bind( this, row.id ) } aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton className='button' onClick={ this.editBook.bind( this, row ) } aria-label="Delete">
                        <EditIcon />
                      </IconButton>
                    </CustomTableCell>
                  </TableRow>
                ) ) }
              </TableBody>
            </Table2>
          </Paper>
        ) }
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

const A9 = withStyles( styles )( App );
export default A9


