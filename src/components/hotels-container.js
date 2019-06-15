import React, { Component } from "react";
import gql from "graphql-tag";
import { Text } from "react-native";
import { Query } from "react-apollo";
import { graphql } from "react-apollo";
import ListHotels from "./list-hotels";

// const { log } = console;

class Hotels extends Component {
  render () {
      return (
        <Query query={ListingsQuery}>
          {({ data, loading, error }) => {
            if (loading) return <Text>Cargando</Text>;
            if (error) return <Text>Error</Text>;
            return <ListHotels hotels={data.city.hotels} />;
          }}
        </Query>
      )
  }
}

// const Hotels = (props) => {
  
//   return (
//   <Query query={ListingsQuery}>
//     {({ data, loading, error }) => {
//       if (loading) return <Text>Cargando</Text>;
//       if (error) return <Text>Error</Text>;
//       return <ListHotels hotels={data.city.hotels} />;
//     }}
//   </Query>
// )};

const ListingsQuery = gql`
  query {
    city(id: 1) {
      hotels {
        id
        distributionName
        available
        pricing
        lastPricing
        availableQuantity
        hotelPhotos {
          url
        }
      }
    }
  }
`;

export default graphql(ListingsQuery)(Hotels);
