import React, { Component } from "react";
import gql from "graphql-tag";
import { Text } from "react-native";
import { Query } from "react-apollo";
import { graphql } from "react-apollo";
import ListHotels from "./list-hotels";
import { GET_HOTELS } from "../queries/index";
import { withNavigation } from "react-navigation";

class Hotels extends Component {
  state = {
    cityId: 1
  };

  render() {
    cityId = this.props.navigation.getParam("cityId");
    return (
      <Query query={GET_HOTELS(cityId)}>
        {({ data, loading, error }) => {
          if (loading) return <Text>Cargando</Text>;
          if (error) return <Text>Error</Text>;
          return <ListHotels hotels={data.city.hotels} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(Hotels);
