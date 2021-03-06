// 'https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=0e85724a8f924c6aba8bd576df364eb7'
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'



const app = function() {

    var Collection = Backbone.Collection.extend({
        url: 'https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=',
        _key: '0e85724a8f924c6aba8bd576df364eb7',

        parse: function(apiResponse) {
            return apiResponse.results
        }
    })

    var Model = Backbone.Model.extend({
        url: 'https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=',
        _key: '0e85724a8f924c6aba8bd576df364eb7',

        parse: function(apiResponse) {
            return apiResponse.results
        }

        initialize: function(id) {
            this.id = id
        }
    })

    var Router = Backbone.Router.extend({
        routes: {
            'home': 'showHomeView',
            '*default': 'backToHome'
        },

        showHomeView: function() {
            var coll = new Collection()

            coll.fetch({
                data: {

                }
            })
        }
    })
}

app()