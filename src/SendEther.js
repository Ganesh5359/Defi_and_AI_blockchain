import React, { Component } from 'react';
import Web3 from 'web3';
import './SendEther.css'
class SendEther extends Component {
  async sendEther() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const recipientAddress = this.recipientAddress.value;
    const amount = parseFloat(this.amount.value, 10);
    const weiAmount = web3.utils.toWei(amount.toString(), 'ether');

    try {
      await web3.eth.sendTransaction({
        from: accounts[0],
        to: recipientAddress,
        value: weiAmount
      });
      alert('Ether successfully sent!');
    } catch (error) {
      console.error(error);
      alert('Error sending ether:', error.message);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Send Ether</h1>
        <div className="form-group">
          <label>Recipient Address</label>
          <input
            type="text"
            ref={input => (this.recipientAddress = input)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount (ether)</label>
          <input
            type="number"
            ref={input => (this.amount = input)}
            className="form-control"
            step="0.01"
            required
          />
        </div>
        <button onClick={() => this.sendEther()} className="btn btn-primary">
          Send Ether
        </button>
      </div>
    );
  }
}

export default SendEther;