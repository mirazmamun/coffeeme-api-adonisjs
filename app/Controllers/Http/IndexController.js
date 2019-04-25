class IndexController {
    index({ response }) {
        return response.json({
            status: 'success',
            data: 'PONG',
            data: []
        })
    }
}
module.exports = IndexController;