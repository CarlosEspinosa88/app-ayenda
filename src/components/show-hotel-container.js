import React from "react";
import gql from "graphql-tag";
import { Text } from "react-native";
import { Query } from "react-apollo";
import { graphql } from "react-apollo";
import ShowHotelDescriptions from "./show-hotel-descriptions";

const ShowHotelContainer = () => (
  <Query query={ListingsQuery}>
    {({ data, loading, error }) => {
      if (loading) return <Text>Cargando</Text>;
      if (error) return <Text>Error</Text>;
      return <ShowHotelDescriptions hotel={data.hotel} />;
    }}
  </Query>
);

const ListingsQuery = gql`
  query {
    hotel(id: 973) {
      id
      distributionName
      description
      walkingDistance
      hotelPhotos {
        url
      }
      amenities {
        name
        imageUrl
      }
    }
  }
`;
export default graphql(ListingsQuery)(ShowHotelContainer);
