import gql from 'graphql-tag'

export const categorias = gql`
    query {
        categories {
            data {
                id
                attributes {
                    name
                    icon
                    slug
                    img
                }
            }
        }
    }
    `

export const category = gql`
    query($id:ID!) {
        category (id: $id){
            data {
                id
                attributes {
                    description
                }
            }
        }
    }
    `