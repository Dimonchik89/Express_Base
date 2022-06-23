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