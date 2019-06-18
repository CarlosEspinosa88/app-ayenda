import { gql } from "apollo-boost";

export const CITIES = gql`
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

export const GET_HOTELS = function(cityId) {
  return gql`
    query {
      city(id: ${cityId}) {
        hotels {
          id
          distributionName
          available
          pricing
          lastPricing
          includeBreakfast
          availableQuantity
          hotelPhotos {
            url
            id
          }
        }
      }
    }
  `;
};

export const GET_HOTEL = function(hotelId) {
  return gql`
    query {
      hotel(id: ${hotelId}) {
        id
        distributionName
        description
        hotelPhotos {
          id
          url
        }
        amenities {
          id
          name
          imageUrl
        }
        points{
          name
          walkingDurationText
          drivingDurationText
          drivingDurationValue
        }
      }
    }
`;
};
