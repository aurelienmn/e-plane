const welcome = async (req, res) => {

    res.json({ message: "Welcome to Aerosocket Receiver" });
};


module.exports = { welcome };