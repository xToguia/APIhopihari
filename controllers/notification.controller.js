const getNotificacoes = (req, res) => {
    try {
        const notifications = [
            { id: 1, message: 'Notificação 1', status: 'active' },
            { id: 2, message: 'Notificação 2', status: 'active' },
        ];

        res.status(200).json({ success: true, data: notifications });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erro ao buscar notificações', error: error.message });
    }
};

module.exports = {
    getNotificacoes,
};