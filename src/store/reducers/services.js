import { BinocularsFill, BuildingDash } from "react-bootstrap-icons";

const initialState = {
    ourServices: []
};

const ourServicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OUR_SERVICES':
            return {
                ...state,
                ourServices: [
                    {
                        icon: <BinocularsFill />,
                        description: 'CCTV'
                    },
                    {
                        icon: <BuildingDash />,
                        description: 'Access Control'
                    },
                    {
                        icon: <BinocularsFill />,
                        description: 'Instructor Alarms'
                    },
                    {
                        icon: <BinocularsFill />,
                        description: 'Maintenance'
                    },
                    {
                        icon: <BinocularsFill />,
                        description: 'Fire Dectection'
                    },
                    {
                        icon: <BinocularsFill />,
                        description: 'Monitoring'
                    }
                ]
            }
        default:
            return state;
    }
};

export default ourServicesReducer;
