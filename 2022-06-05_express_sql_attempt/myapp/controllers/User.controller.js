const db = require("../database");




module.exports.findFirstUser = async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM USERS`);
    // console.log(results);
    // console.log("-----------------------------")
    // console.log(results[0][1].username);
    // res.send(200);
    res.status(200).send(results[0]);
}


module.exports.createUser = (req, res) => {
    const { username, password, first_name, last_name } = req.body;
    const created_at = new Date().toISOString;
    if (username && password) {
        // console.log(username, password);
        // console.log(username, password, password);
        try {
            db.promise().query(
                `INSERT INTO USERS (username, password, first_name, last_name, created_at) VALUES('${username}','${password}', '${first_name}', '${last_name}', '${created_at}')`
            );
            res.status(201).send({ msg: "Created User" });
        } catch (err) {
            console.log(err);
        }
    }

}