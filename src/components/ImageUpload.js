import React, { Component } from 'react';
import { post } from 'axios';


class ImageUpload extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };

        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e)
    {
        e.preventDefault();
        this.uploadImage(this.state.file);
    }

    _handleImageChange(e)
    {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }

    uploadImage(imageFile)
    {
        let imageFormData = new FormData();
        imageFormData.append('imageFile', imageFile);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        const url = 'http://localhost:3001/uploadimage/upload';
        post(url, imageFormData, config)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });


    }

    render() 
    {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if(imagePreviewUrl)
        {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="file" onChange={this._handleImageChange}/>
                    <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                </form>
                {$imagePreview}
            </div>
        );
    }
}

export default ImageUpload;
