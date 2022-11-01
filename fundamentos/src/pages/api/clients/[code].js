export default function handler(req, res) {
    const code = req.query.code
    res.status(200).json({
        id: code,
        nome: `Maria ${code}`,
        email: `mariamariamaria${code}@xcfmail.com`
    })
}