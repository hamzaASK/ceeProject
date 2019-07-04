import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import Buttons from './buttonNavigationHome'
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EvStation from '@material-ui/icons/EvStation'
import { URL_Host1, URL_Host2 } from '../../Settings/Server'

/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
*/

class App extends Component
{

  state = {
    statistics: {
      total: 0,
      valid: 0,
      invalid: 0,
      inThisMonth: 0,
    },
    books: [],
    newBookData: {
      title: '',
      rating: ''
    },
    editBookData: {
      id: '',
      title: '',
      rating: ''
    },
    newBookModal: false,
    editBookModal: false
  }
  /*
  |--------------------------------------------------------------------------
  |
  |--------------------------------------------------------------------------
  */

  _refreshBooks ()
  {
    axios.get( `${ URL_Host1 }/api/all` ).then( ( response ) =>
    {
      this.setState( { books: response.data } )
      var total = this.state.books.length
      this.setState(
        {
          statistics:
          {
            total,
            valid: this.state.books.filter( function ( x ) { return x.validity === '1' } ).length,
            invalid: this.state.books.filter( function ( x ) { return x.validity !== '1' } ).length
          }
        }
      )
    } );
  }

  componentWillMount ()
  {
    this._refreshBooks();
  }
  /*
  |--------------------------------------------------------------------------
  |
  |--------------------------------------------------------------------------
  */

  toggleNewBookModal ()
  {
    this.setState(
      {
        newBookModal: !this.state.newBookModal
      }
    );
  }

  toggleEditBookModal ()
  {
    this.setState( {
      editBookModal: !this.state.editBookModal
    } );
  }
  /*
  |--------------------------------------------------------------------------
  |                       Action Update,Delete
  |--------------------------------------------------------------------------
  */

  updateBook ()
  {
    let { validity, lname } = this.state.editBookData;
    axios.put( `${ URL_Host1 }/api/userupdate/` + this.state.editBookData.id, { validity, lname } )
      .then( ( response ) =>
      {
        this._refreshBooks();
        this.setState( { editBookModal: false, editBookData: { id: '', validity: '', lname: '' } } )
      } );
  }

  editBook ( id, validity, lname )
  {
    this.setState( { editBookData: { id, validity, lname }, editBookModal: !this.state.editBookModal } );
  }

  deleteBook ( id )
  {
    axios.delete( `${ URL_Host1 }/api/delete/` + id ).then( ( response ) =>
    {
      this._refreshBooks();
    } );
  }


  render ()
  {
    const { classes } = this.props;
    return (
      <div className="App container" style={ { minWidth: '100%' } }>
        <Buttons statistics={ this.state.statistics } />
        <Modal isOpen={ this.state.editBookModal } toggle={ this.toggleEditBookModal.bind( this ) }>
          <ModalHeader toggle={ this.toggleEditBookModal.bind( this ) }>Changer  l'Etat  De  Votre  Utilisateur</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="validity">l'etat</Label>
              <TextField style={ { width: '100%' } }
                select className={ classNames( classes.fullWidth, classes.textField, classes.noPaddingMargin ) } variant="outlined" label="With Select"
                value={ this.state.editBookData.validity } onChange={ ( e ) => { let { editBookData } = this.state; editBookData.validity = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><EvStation /></InputAdornment>, } }>
                <MenuItem key={ 0 } value={ 0 }>Non Validé</MenuItem>
                <MenuItem key={ 1 } value={ 1 }>Validé</MenuItem>
              </TextField>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button2 color="primary" onClick={ this.updateBook.bind( this ) }>Update Book</Button2>{ ' ' }
            <Button2 color="secondary" onClick={ this.toggleEditBookModal.bind( this ) }>Cancel</Button2>
          </ModalFooter>
        </Modal>
        <Spring from={ { opacity: 0, } }
          to={ { opacity: 1, } }
          config={ { delay: 1100, duration: 1100 } }>{ props => (
            <Table2 className={ classes.table } style={ props }>
              <TableHead>
                <TableRow>
                  <CustomTableCell>#</CustomTableCell>
                  <CustomTableCell align="center">Nom</CustomTableCell>
                  <CustomTableCell align="center">Prénom</CustomTableCell>
                  <CustomTableCell align="center">Validation</CustomTableCell>
                  <CustomTableCell align="center">Image</CustomTableCell>
                  <CustomTableCell align="center">Action</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{ this.state.books.map( row => (
                <TableRow className={ classes.row } key={ row.id }>
                  <CustomTableCell align="center">{ row.id }</CustomTableCell>
                  <CustomTableCell align="center">{ row.nom }</CustomTableCell>
                  <CustomTableCell align="center">{ row.prenom }</CustomTableCell>
                  <CustomTableCell align="center">{ row.validity === '1' ? 'Validé' : 'Non validé' }</CustomTableCell>
                  <CustomTableCell align="center">
                    <img alt='img' src={ row.image === 'WithoutImage' || !row.image ? 'images/flora/1.png' : "images/profil/" + row.image } style={ { width: 70, height: 70, borderRadius: '50%' } } />
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <IconButton className='button' onClick={ this.deleteBook.bind( this, row.id ) } aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton className='button' onClick={ this.editBook.bind( this, row.id, row.validity, row.lname ) } aria-label="Delete">
                      <EditIcon />
                    </IconButton>
                  </CustomTableCell>
                </TableRow> ) ) }
              </TableBody>
            </Table2>
          ) }
        </Spring>
      </div>
    );
  }
}
/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
*/
const CustomTableCell = withStyles( theme => ( {
  head: {
    backgroundColor: '#383234',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
} ) )( TableCell );
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
  input: {
    display: 'none',
  },
} );

const A3 = withStyles( styles )( App );
export default A3
