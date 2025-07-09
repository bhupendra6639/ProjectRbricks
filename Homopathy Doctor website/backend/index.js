const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const formRoutes = require('./Routes/Form');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/form', formRoutes);

// diseases
const diseaseRoutes = require('./Routes/diseases');
app.use('/api/diseases', diseaseRoutes);

//experience
const experienceRoutes = require('./Routes/experience');
app.use('/api/experience', experienceRoutes);

// testinomial
app.use('/api/testimonials', require('./Routes/testimonials'));

//treathment
const treatmentRoutes = require('./Routes/treatments');
app.use('/api/treatments', treatmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
