import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
const app = express();
const PORT = 8384;

// Get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

// Website endpoints - sending back html elements

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// listen to incoming requests - specifically connected to port
// functional server: http://localhost:8383
// IP -> 127.0.0.0:8383
app.listen(PORT, () => {
    console.log(`Server has started on: ${PORT}`)
});


