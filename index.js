const express = require('express');
const app = express();
const PORT = 3001;
app.get('/users', (req, res) => {
res.json({id:1,name:'Ram'})
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
