
//const { createNode, getNodes, getOneNode } = nodesController;
const TellusNode = require('../model/node');

/*url cleaning function please extract from here*/
const cleanUrl = (str) => {
  if (str) {
    return str
    .replace(/[^A-Za-z0-9 ]/g,'')
      .replace(/\s{2,}/g,' ')
      .replace(/\s/g, "-")
      .slice(0, 40);
  }
}

const createNode = (req, res) => {
  console.log(req.body);
  if (req.body.created_by) {
    const {
      title,
      node_type,
      tag,
      geolocation,
      poster_path,
      backdrop_path,
      short_description,
      overview,
      created_by
    } = req.body;

    const
      created_at = new Date(),
      title_url = cleanUrl(title);
      node_type_name = cleanUrl(node_type);

    const node = new TellusNode({
      title,
      title_url,
      node_type,
      node_type_name,
      tag,
      geolocation,
      poster_path,
      backdrop_path,
      short_description,
      overview,
      created_by
      })
      console.log(node);
      node.save()
        .then(tellusNode => res.json({'message': tellusNode}))
        //.then(() => {res.status(201); console.log('Created: ', title)})
        .catch(e => console.log(e))
      }
      else {
        res.status(500).send({ message : { fault: 'missing fields in posts' }, error: "Something is missing in your post!" });
      }
}

const getNodes = (req, res) => {
  const limit = (req.params.limit ? req.params.limit : 25);
  const skip = (req.params.skip ? req.params.skip : 0);
  console.log('length:',limit,'skipped:',skip);

  TellusNode.find()
  .sort({'_id': -1})
  .skip(parseInt(skip, 10))
  .limit(parseInt(limit, 10))
  .then((nodeList) => res.json(nodeList))
}

const getOneNode = (req, res) => {
  console.log(req.params.id);
  TellusNode.find({_id : req.params.id})
  .then((node) => res.json(node))
}

module.exports = {
  createNode,
  getNodes,
  getOneNode
}
