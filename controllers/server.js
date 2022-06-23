let server = [
    {id: "1", name: "AWS", status: "working"},
    {id: "2", name: "Google cloud", status: "working"},
    {id: "3", name: "Yandex Cloud", status: "working"},
    {id: "4", name: "Microsoft", status: "pending"}
]

export const getAll = (req, res) => {
    // res.status(200).json(server);
    res.json(server);

}

export const create = (req, res) => {
    const newServe = {
        id: Date.now().toString(),
        ...req.body
    }
    server.push(newServe);
    res.status(201).json(newServe)
}

export const remove = (req, res) => {
    console.log("id", req.params.id);
    server = server.filter(item => item.id !== id)
    res.json({message: "Server has been removed"})
}