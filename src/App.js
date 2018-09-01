import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: [],
      from: '',
      to: '',
      error: ''
    }
  }

  async componentDidMount() {
    let from = document.querySelector('.trip-from').textContent
    let to = document.querySelector('.trip-to').textContent

    await axios.get('/train_fare.json')
      .then(response => {
        let results = response.data.filter(item => item.FIELD2 === from && item.FIELD3 === to)
        this.setState({
          results,
          from,
          to
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {results} = this.state

    return (
      <div className="train-fair-widget">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Z</th>
                <th scope="col">Kam</th>
                <th scope="col" colSpan="2">Dospělý 15+</th>
                <th scope="col" colSpan="2">Dítě 6-15</th>
                <th scope="col" colSpan="2">student 15-26</th>
                <th scope="col" colSpan="2">žák 6-15</th>
                <th scope="col" colSpan="2">ZTP+ZTP/P</th>
                <th scope="col" colSpan="2">Pes</th>
                <th scope="col" colSpan="2">Kolo</th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
              </tr>
            </thead>
            <tbody>
              {results.map(row => {
                return <tr key={row.FIELD2}>
                  <td>{row.FIELD2}</td>
                  <td>{row.FIELD3}</td>
                  <td>{row.FIELD4}</td>
                  <td>{row.FIELD5}</td>
                  <td>{row.FIELD6}</td>
                  <td>{row.FIELD7}</td>
                  <td>{row.FIELD8}</td>
                  <td>{row.FIELD9}</td>
                  <td>{row.FIELD10}</td>
                  <td>{row.FIELD11}</td>
                  <td>{row.FIELD12}</td>
                  <td>{row.FIELD13}</td>
                  <td>{row.FIELD14}</td>
                  <td>{row.FIELD15}</td>
                  <td>{row.FIELD16}</td>
                  <td>{row.FIELD17}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
