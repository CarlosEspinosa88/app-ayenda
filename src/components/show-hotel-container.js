import React from "react";
import { Text } from "react-native";
import { Query } from "react-apollo";
import { GET_HOTEL } from "../queries/index";
import ShowHotelDescriptions from "./show-hotel-descriptions";
import { withNavigation } from "react-navigation";

class ShowHotelContainer extends React.Component {
  state = {
    hotelId: 1
  };

  render() {
    hotelId = this.props.navigation.getParam("hotelId");
    return (
      <Query query={GET_HOTEL(hotelId)}>
        {({ data, loading, error }) => {
          if (loading) return <Text>Cargando</Text>;
          if (error) return <Text>Error</Text>;
          return <ShowHotelDescriptions hotel={data.hotel} />;
        }}
      </Query>
    );
  }
}

export default withNavigation(ShowHotelContainer);
