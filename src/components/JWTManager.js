import React, { Component } from 'react';
import axios from 'axios';

class JWTManager extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            token: '',
            decodedToken: '',
            authorizedInfo: ''
        }

        this.handleGetToken= this.handleGetToken.bind(this);
        this.handlleDecode= this.handlleDecode.bind(this);
        this.handleRequestWithToken = this.handleRequestWithToken.bind(this);
    }
    
    handleGetToken()
    {
        var self = this;
        axios.post('http://localhost:3001/jwt/token')
            .then(function(response){
                self.setState({token: response.data.token});
            })
            .catch(function(error){
                console.log(error);
            });
    }

    handlleDecode()
    {
        var token = this.state.token;
        if(token)
        {
            var payload = token.split('.')[1];
            var decoded = JSON.stringify(JSON.parse(window.atob(payload)), null, 2);
            
            this.setState({
                decodedToken: decoded
            });
        }
    }

    handleRequestWithToken()
    {
        var self = this;
        var token = this.state.token;
        if(token)
        {
            var instance = axios.create({
                baseURL: 'http://localhost:3001',
                headers: {Authorization: 'Bearer '+token}
            });
            instance.post('/api/jwt/test')
                .then(function(response){
                    console.log(response);
                    self.setState({authorizedInfo: response.data})
                })
                .catch(function(error){
                    console.log(error);
                });

        }
    }

    render()
    {
        return (
            <div>
                <button onClick={this.handleGetToken}>Get Token</button>
                <button onClick={this.handlleDecode}>Decode</button>
                <button onClick={this.handleRequestWithToken}>Request With Token</button>
                <p>
                    Token: {this.state.token}
                </p>
                <p>
                    Decoded Token: {this.state.decodedToken}
                </p>
                <p>
                    Authorized Info: {this.state.authorizedInfo}
                </p>
            </div>
        );
    }
}

export default JWTManager;
