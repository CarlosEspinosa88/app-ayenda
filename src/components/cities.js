import React, { Component } from "react";
import gql from "graphql-tag";
import { Text, V } from "react-native";
import { Query } from "react-apollo";
import { graphql } from "react-apollo";
import ListCities from "./list-cities";

// const Cities = () => (
//   <Query query={ListingsQuery}>
//     {({ data, loading, error }) => {
//       if (loading) return <Text>Cargando</Text>;
//       if (error) return <Text>Error</Text>;
//       return <ListCities cities={data.allCountries[0].cities} />;
//     }}
//   </Query>
// );

class Cities extends Component {
  
  // state = {
  //   loading: false,
  //   error: null,
  //   data: undefined,
  //   id: 1
  // }

  render(){
    return (
      <Query query={ListingsQuery}>
        {({ data, loading, error }) => {
          if (loading) return <Text>Cargando...</Text>;
          if (error) return <Text>Error</Text>;
          return <ListCities cities={data.allCountries[0].cities} />;
        }}
      </Query>
    )
  }
}

const ListingsQuery = gql`
  query {
    allCountries {
      cities {
        id
        name
        firstPhoto {
          url
        }
      }
    }
  }
`;
export default graphql(ListingsQuery)(Cities);
