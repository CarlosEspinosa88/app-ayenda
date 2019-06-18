import React, { Component } from "react";
import { Text } from "react-native";
import { Query } from "react-apollo";
import ListCities from "./list-cities";
import { CITIES } from "../queries/index";
import { withNavigation } from "react-navigation";

class Cities extends Component {
  render() {
    return (
      <Query query={CITIES}>
        {({ data, loading, error }) => {
          if (loading) return <Text>Cargando...</Text>;
          if (error) return <Text>Error</Text>;
          return <ListCities cities={data.allCountries[0].cities} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(Cities);
