exports.authorize = (req, res, next) => {
    if(req.headers.token){
        next();
    }else{
        res.send({data: {}, message: "", status: "unauthorize"})
    }
}