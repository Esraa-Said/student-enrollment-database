/**
 * handling errors due to not found routes
 * 
 */


export const notFound = (req, res) => res.status(404).send("Route does not exist")
