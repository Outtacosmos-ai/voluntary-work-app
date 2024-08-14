import React from 'react';

// OverviewCard Component for displaying key statistics
const OverviewCard = ({ title, count }) => (
  <div className="bg-white p-6 shadow rounded-lg text-center">
    <h4 className="text-lg font-medium">{title}</h4>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Association Dashboard</h2>

      {/* Overview Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <OverviewCard title="Total Activities" count={15} />
          <OverviewCard title="Active Volunteers" count={200} />
          <OverviewCard title="Upcoming Events" count={5} />
        </div>
      </section>

      {/* Activity Management Section (Placeholder) */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Activity Management</h3>
        <div className="bg-white p-4 shadow rounded">
          <p>List of activities will go here...</p>
          {/* You can add a table or list component here */}
        </div>
      </section>

      {/* Association Profiles Section (Placeholder) */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Association Profiles</h3>
        <div className="bg-white p-4 shadow rounded">
          <p>Association profiles will go here...</p>
          {/* You can add a list of profiles or a profile management component here */}
        </div>
      </section>

      {/* Reports/Analytics Section (Placeholder) */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Reports & Analytics</h3>
        <div className="bg-white p-4 shadow rounded">
          <p>Reports and analytics will go here...</p>
          {/* You can integrate charts or graphs here using a library like Chart.js */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
