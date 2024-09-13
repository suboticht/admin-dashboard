import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
    BarChart, 
    Calendar, 
    Contacts, 
    Dashboard, 
    FAQ, 
    GeographyChart, 
    Invoices, 
    Manage, 
    PieChart, 
    Profile, 
    StreamChart,
    LineChart
} from './pages'
import App from './App'

const RouterApp = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
              <Route path="/" element={<Dashboard />} />
              <Route path='/barchart' element={<BarChart />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geographychart' element={<GeographyChart />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/manage' element={<Manage />} />
              <Route path='/piechart' element={<PieChart />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/streamchart' element={<StreamChart />} />
              <Route path='/linechart' element={<LineChart />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default RouterApp