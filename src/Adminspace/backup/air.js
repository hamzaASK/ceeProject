import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button} from 'reactstrap';

class App extends Component {
  state = {
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
  componentWillMount() {
    this._refreshBooks();
  }
  toggleNewBookModal() {
    this.setState({
      newBookModal: ! this.state.newBookModal
    });
  }
  toggleEditBookModal() {
    this.setState({
      editBookModal: ! this.state.editBookModal
    });
  }
  addBook() {
    axios.post('http://localhost:3000/books', this.state.newBookData).then((response) => {
      let { books } = this.state;

      books.push(response.data);

      this.setState({ books, newBookModal: false, newBookData: {
        title: '',
        rating: ''
      }});
    });
  }
  updateBook() {
    let { varvalue, lname } = this.state.editBookData;

    axios.put('http://localhost:8001/api/updateeair/' + this.state.editBookData.id, {
      varvalue, lname
    }).then((response) => {
      this._refreshBooks();

      this.setState({
        editBookModal: false, editBookData: { id: '', varvalue: '', lname: '' }
      })
    });
  }
  editBook(id, varvalue, lname) {
    this.setState({
      editBookData: { id, varvalue, lname }, editBookModal: ! this.state.editBookModal
    });
  }
  deleteBook(id) {
    axios.delete('http://localhost:8001/api/delete/' + id).then((response) => {
      this._refreshBooks();
    });
  }
  _refreshBooks() {
    axios.get('http://localhost:8001/api/air').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }
  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.varname}</td>
          <td>{book.varvalue}</td>
		<td>{book.ancien_value}</td>       
	   <td>{book.created_at}</td>        
        <td>{book.updated_at}</td>  	
	<td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.varvalue, book.lname)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">

      <h1>BACK UP  eair</h1>

    <br/>
	<br/>

      <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.title = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input id="rating" value={this.state.newBookData.rating} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.rating = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>changer  l'energie</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="varvalue">l'etat</Label>
            <Input id="varvalue" value={this.state.editBookData.varvalue} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.varvalue = e.target.value;

              this.setState({ editBookData });
            }} />
			
		
			
			
			
          </FormGroup>
         

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>varname</th>
              <th>value</th>
				<th>ancien_value</th>	             
			 <th>creation</th>
                <th>modification</th>
					<th>action</th>          
		  </tr>
          </thead>

          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    );
  }
}

const A4 = (App);
export default A4
