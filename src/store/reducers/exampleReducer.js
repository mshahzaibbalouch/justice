
const initialState = {
  services: '',
  whatwedo:'',
  servicesDescription : '',
  servicesDesBold:'',
  readmore:'',
  servicesButtons:[]
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SERVICES_TITLE':
      return {
        ...state,
        services: action.payload,
        servicesDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus neque quidem in accusamus illum id cum quibusdam mollitia unde doloremque ducimus optio provident corrupti assumenda necessitatibus voluptatem ab, libero rem perferendis, eaque similique quasi quos iste! Atque voluptatibus velit quaerat maxime ullam, eos quis reiciendis unde, numquam quod assumenda?',
        servicesDesBold:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        readmore:'Read more',
        servicesButtons:['Enquiry Form', 'Book your FREE Site Survey', 'FREE Purchasers Guide', 'Contact Us']
      }
      case 'WHATWEDO_TITLE':
      return {
        ...state,
        what: action.payload
      }
    default:
      return state;
  }
};

export default exampleReducer;
