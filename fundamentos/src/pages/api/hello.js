// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      title: 'Teste API',
      method: req.method, 
      name: req.query.name,
      age: req.query.idade
  })
}
