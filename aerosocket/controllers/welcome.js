const welcome = async (req, res) => {

    res.json({ message: "Bienvenue sur le serveur Aerosocket !" });
};


module.exports = { welcome };