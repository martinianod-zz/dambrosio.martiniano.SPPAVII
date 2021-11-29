import React, { Component } from 'react'

export default class Error404 extends Component {

    render() {
        return (
            <div class="box">
                <h2><strong>Error 404</strong>, Page NOT FOUND.</h2>
                <a class="button is-primary" href="/home">
                    <span>Volver</span>
                </a>
            </div>
        )
    }
}
