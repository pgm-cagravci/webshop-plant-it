/**
 * A parser to parse the incoming request
 */

 export default (request, response) => {
    const { order } = request.body;
  
    // validate if we have a  in the body
    if (order == null) {
      throw new Error('The order object was not set.');
    }
  
    // return the parsed
    return order;
  }