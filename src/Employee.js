import React, { Component } from 'react';

//import { variables } from './Variable';
export class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      modalTitle: '',
      usernameId: 0,
      username: '',
      email: '',
      phone: '',
      skillsets: '',
      hobby: '',
      filteredEmployees: [], // Initialize filteredEmployees as empty array
    };
  }

  API_URL = 'http://localhost:5260/api/';

  async refreshList() {
    fetch(this.API_URL + 'freelancer')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data, filteredEmployees: data }); // Update filteredEmployees when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ employees: [], filteredEmployees: [] }); // Handle the error, set both arrays to empty
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeusername = (e) => {
    this.setState({ username: e.target.value });
  };
  changeemail = (e) => {
    this.setState({ email: e.target.value });
  };
  changephone = (e) => {
    this.setState({ phone: e.target.value });
  };
  changehobby = (e) => {
    this.setState({ hobby: e.target.value });
  };
  changeskillsets = (e) => {
    const skillsets = e.target.value;
    this.setState({ skillsets }, () => {
      if (skillsets.trim() === '') {
        this.setState({ filteredEmployees: this.state.employees });
      } else {
        this.filterEmployees();
      }
    });
  };

  filterEmployees = () => {
    const { employees, skillsets } = this.state;
    const filteredEmployees = employees.filter(
      (emp) => emp.skillsets.toLowerCase().includes(skillsets.toLowerCase())
    );
    this.setState({ filteredEmployees });
  };

  addClick() {
    this.setState({
      modalTitle: 'Add Employee',
      usernameId: 0,
      username: '',
      email: '',
      phone: '',
      skillsets: '',
      hobby: '',
    });
  }
  editClick(emp) {
    this.setState({
      modalTitle: 'Edit Employee',
      usernameId: emp.usernameId,
      username: emp.username,
      email: emp.email,
      phone: emp.phone,
      skillsets: emp.skillsets,
      hobby: emp.hobby,
    });
  }

  createClick() {
    fetch(this.API_URL + 'freelancer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
        skillsets: this.state.skillsets,
        hobby: this.state.hobby,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        alert(result);
        this.refreshList();
      })
      .catch((error) => {
        console.error('Error creating employee:', error);
        alert('Failed to create employee.');
      });
  }

  updateClick() {
    fetch(this.API_URL + 'freelancer', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usernameId: this.state.usernameId,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
        skillsets: this.state.skillsets,
        hobby: this.state.hobby,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert('Failed');
        }
      );
  }

  deleteClick(id) {
    if (window.confirm('Are you sure?')) {
      fetch(this.API_URL + 'freelancer/' + id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert('Failed');
          }
        );
    }
  }

  handleChangePhone = (event) => {
    const { value } = event.target;
    // Remove any non-numeric characters from the input
    const cleanedPhone = value.replace(/[^0-9]/g, '');
    this.setState({ phone: cleanedPhone });
  }

  render() {
    const {
      filteredEmployees,
      modalTitle,
      usernameId,
      username,
      email,
      phone,
      skillsets,
      hobby,
    } = this.state;

    return (
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text">Search Skillsets</span>
          <input
            type="text"
            className="form-control"
            value={this.state.skillsets}
            onChange={this.changeskillsets}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Employee
        </button>
        <table className="table table-striped mb-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Telephone</th>
              <th>Skillsets</th>
              <th>Hobby</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.usernameId}>
                <td>{emp.usernameId}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.skillsets}</td>
                <td>{emp.hobby}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light m-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(emp)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light m-1"
                    onClick={() => this.deleteClick(emp.usernameId)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
              <form>
                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2 w-50 bd-highlight">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Name</span>
                      <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={this.changeusername}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">E-mail</span>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={this.changeemail}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Telephone</span>
                      <input
                        type="text"
                        className="form-control"
                        pattern="[0-9]*"
                        value={phone}
                        minLength={10}
                        maxLength={11}
                        onChange={this.handleChangePhone}
                    />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Skillsets</span>
                      <input
                        type="text"
                        className="form-control"
                        value={skillsets}
                        onChange={this.changeskillsets}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Hobby</span>
                      <input
                        type="text"
                        className="form-control"
                        value={hobby}
                        onChange={this.changehobby}
                      />
                    </div>
                  </div>
                </div>
                </form>
                {usernameId === 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}

                {usernameId !== 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
