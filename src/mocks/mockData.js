

export const  MOCK_DATA = {
    "name": "GOPIZZA",
    "rating": 4.1,
    "address": "Ramamurthy nagar",
    "image": "72014f49b5d447aebc3ae8136e5a139d"
}

export const resData = {
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
            "nextOffset": "CKBTEOwkKICgr+uI3JnQKDDFDjgD",
            "widgetOffset": {
                "restaurantCountWidget": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
                "inlineFacetFilter": "",
                "collectionV5MastheadWidget": ""
            }
        },
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                        "collectionId": "83644",
                        "title": "Pizza",
                        "description": "Cheesilicious pizzas to make every day extraordinary.",
                        "imageId": "v1674029952/PC_Creative%20refresh/3D_bau/collections_new/Pizza.png",
                        "aspectRatio": "3.44",
                        "cta": {
                            "link": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza,pizza,ads_pc_pizza",
                            "type": "collectionv2"
                        },
                        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                        "count": "33 restaurants"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                        "sortConfigs": [
                            {
                                "key": "relevance",
                                "title": "Relevance (Default)",
                                "selected": true,
                                "defaultSelection": true
                            },
                            {
                                "key": "deliveryTimeAsc",
                                "title": "Delivery Time"
                            },
                            {
                                "key": "modelBasedRatingDesc",
                                "title": "Rating"
                            },
                            {
                                "key": "costForTwoAsc",
                                "title": "Cost: Low to High"
                            },
                            {
                                "key": "costForTwoDesc",
                                "title": "Cost: High to Low"
                            }
                        ],
                        "restaurantCount": 33,
                        "facetList": [
                            {
                                "label": "Veg/Non-Veg",
                                "id": "isVeg",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Non Veg",
                                        "id": "isVegfacetquery2",
                                        "analytics": {}
                                    },
                                    {
                                        "label": "Pure Veg",
                                        "id": "isVegfacetquery3",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            },
                            {
                                "label": "Delivery Time",
                                "id": "deliveryTime",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than 45 mins",
                                        "id": "deliveryTimefacetquery3",
                                        "analytics": {}
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            },
                            {
                                "label": "Cost For Two",
                                "id": "costForTwo",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than Rs. 300",
                                        "id": "costForTwofacetquery3",
                                        "analytics": {}
                                    },
                                    {
                                        "label": "Rs.300 - Rs.600",
                                        "id": "costForTwofacetquery4",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Less than Rs. 300",
                                        "id": "costForTwofacetquery5",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            }
                        ]
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "widgetPadding": {
                                "left": 16,
                                "top": 20,
                                "right": 16,
                                "bottom": 16
                            },
                            "scrollBar": {},
                            "widgetTheme": {
                                "defaultMode": {
                                    "backgroundColour": "#FFFFFF",
                                    "theme": "THEME_TYPE_LIGHT"
                                },
                                "darkMode": {
                                    "backgroundColour": "#1B3028",
                                    "theme": "THEME_TYPE_DARK"
                                }
                            }
                        },
                        "id": "restaurantCountWidget",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                                "text": "Restaurants to explore",
                                "headerStyling": {
                                    "textSize": 15,
                                    "textColor": "text_color_highest_emphasis",
                                    "textFontName": "FONT_NAME_HEADER_H5",
                                    "maxLines": 1
                                }
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "712459",
                            "name": "Tesoro - The Sourdough Pizza Kitchen",
                            "cloudinaryImageId": "b60070b24325ebf05b6d01698dc15f68",
                            "locality": "K R Puram",
                            "areaName": "Kammanahalli/Kalyan Nagar",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Continental",
                                "Pizzas",
                                "Italian"
                            ],
                            "avgRating": 4.2,
                            "feeDetails": {
                                "restaurantId": "712459",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 8700
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 8700
                            },
                            "parentId": "293519",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=9838016~p=1~eid=0000018c-4e43-e513-79b4-b37100af015b~srvts=1702120121619~83644",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 8.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "49 mins",
                                "lastMileTravelString": "8.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-09 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹100 OFF",
                                "subHeader": "ABOVE ₹999",
                                "discountTag": "FLAT DEAL"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=712459&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "437377",
                            "name": "Bakeovers By Saira",
                            "cloudinaryImageId": "446d511401b65e7915aaf139835a7f49",
                            "locality": "Hennur",
                            "areaName": "Kalyan Nagar",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Italian",
                                "Snacks",
                                "Desserts"
                            ],
                            "avgRating": 3.9,
                            "feeDetails": {
                                "restaurantId": "437377",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 9000
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 9000
                            },
                            "parentId": "263951",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=9835830~p=2~eid=0000018c-4e43-e513-79b4-b37200af0262~srvts=1702120121619~83644",
                            "sla": {
                                "deliveryTime": 53,
                                "lastMileTravel": 9.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "53 mins",
                                "lastMileTravelString": "9.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-09 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=437377&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "736950",
                            "name": "GOPIZZA",
                            "cloudinaryImageId": "72014f49b5d447aebc3ae8136e5a139d",
                            "locality": "T C Palya main road",
                            "areaName": "Ramamurthy nagar",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Pizzas"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                                "restaurantId": "736950",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 8000
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 8000
                            },
                            "parentId": "21732",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=9839892~p=3~eid=0000018c-4e43-e513-79b4-b37300af0348~srvts=1702120121619~83644",
                            "sla": {
                                "deliveryTime": 43,
                                "lastMileTravel": 8.1,
                                "serviceability": "SERVICEABLE",
                                "slaString": "43 mins",
                                "lastMileTravelString": "8.1 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-10 00:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹179"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=736950&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "10096",
                            "name": "Little Italy",
                            "cloudinaryImageId": "tgbvf0o0jnwyaszb4s64",
                            "locality": "HRBR 2nd Block Extension",
                            "areaName": "Kalyan Nagar",
                            "costForTwo": "₹1200 for two",
                            "cuisines": [
                                "Italian",
                                "Pizzas",
                                "Pastas",
                                "Salads",
                                "Desserts"
                            ],
                            "avgRating": 4,
                            "veg": true,
                            "feeDetails": {
                                "restaurantId": "10096",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 9700
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 9700
                            },
                            "parentId": "600",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "5K+",
                            "promoted": true,
                            "adTrackingId": "cid=9651523~p=4~eid=0000018c-4e43-e513-79b4-b37400af0400~srvts=1702120121619~83644",
                            "sla": {
                                "deliveryTime": 53,
                                "lastMileTravel": 9.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "53 mins",
                                "lastMileTravelString": "9.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-09 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                        "description": "gourmet"
                                    },
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                    "description": "gourmet"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "30% OFF",
                                "subHeader": "UPTO ₹150",
                                "discountTag": "SAVE BIG"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=10096&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "482111",
                            "name": "The Pizza Bakery",
                            "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                            "locality": "Hrbr Layout",
                            "areaName": "Kalyan Nagar",
                            "costForTwo": "₹700 for two",
                            "cuisines": [
                                "Pizzas",
                                "Pastas",
                                "Italian",
                                "Desserts",
                                "Continental"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "482111",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 11200
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 11200
                            },
                            "parentId": "11108",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "1K+",
                            "promoted": true,
                            "adTrackingId": "cid=9840438~p=5~eid=0000018c-4e43-e513-79b4-b37500af0513~srvts=1702120121619~83644",
                            "sla": {
                                "deliveryTime": 56,
                                "lastMileTravel": 10.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "56 mins",
                                "lastMileTravelString": "10.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-09 23:30:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                        "description": "gourmet"
                                    }
                                ],
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                    "description": "gourmet"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "description": "",
                                                    "shortDescription": "options available",
                                                    "fontColor": "#7E808C"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "40% OFF",
                                "subHeader": "UPTO ₹100"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=482111&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "407254",
                            "name": "Pizza Hut",
                            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                            "locality": "KR Puram",
                            "areaName": "KR Puram",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Pizzas"
                            ],
                            "avgRating": 3.6,
                            "feeDetails": {
                                "restaurantId": "407254",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 6300
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 6300
                            },
                            "parentId": "721",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "1K+",
                            "sla": {
                                "deliveryTime": 40,
                                "lastMileTravel": 6.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40 mins",
                                "lastMileTravelString": "6.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-10 01:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹179"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=407254&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "46483",
                            "name": "Koel's Pizzeria",
                            "cloudinaryImageId": "91a7a0dbf41aee19b3253374ad6c27a2",
                            "locality": "Kothnur",
                            "areaName": "Geddalahalli",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Pizzas",
                                "Italian"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                                "restaurantId": "46483",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 7600
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 7600
                            },
                            "parentId": "21529",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 35,
                                "lastMileTravel": 7.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35 mins",
                                "lastMileTravelString": "7.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-12-09 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "10% OFF",
                                "subHeader": "ABOVE ₹900",
                                "discountTag": "FLAT DEAL"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=46483&source=collection&query=Pizza",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
    },
    "tid": "326c2909-6ac6-44a1-89ef-f00b956c22b6",
    "sid": "ax4dea5b-fc49-4b45-bf5e-422569302ea2",
    "deviceId": "94f7dc27-a803-6739-ff0a-2c9c8d237972",
    "csrfToken": "1TYaVw2kCjdZ-f437aPiyX2RnpekhhA99cZm19AU"
}