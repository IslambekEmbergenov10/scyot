import React, { useState } from 'react';

const stations = [
  'Станция Кунград',
  'Станция Нукус',
  'Станция Тахиатас',
  'Станция Ургенч',
  'Станция Хива',
  'Станция Беруни',
  'Станция Актобе',
  'Станция Ходжейли',
  'Станция Шуманай',
  'Станция Чимбай',
  'Станция Каракалпакстан',
  'Станция Кырккыз',
];

// Station data with coordinates and journals
const stationData = {
  'Станция Кунград': {
    journals: [
      'Журнал Кунград-1',
      'Журнал Кунград-2', 
      'Журнал Кунград-3',
      'Журнал Кунград-4',
      'Журнал Кунград-5'
    ],
    coordinates: { lat: 43.0644, lng: 58.9069 },
    address: 'Кунград, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Нукус': {
    journals: [
      'Журнал Нукус-1',
      'Журнал Нукус-2',
      'Журнал Нукус-3',
      'Журнал Нукус-4',
      'Журнал Нукус-5'
    ],
    coordinates: { lat: 42.4531, lng: 59.6103 },
    address: 'Нукус, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Тахиатас': {
    journals: [
      'Журнал Тахиатас-1',
      'Журнал Тахиатас-2',
      'Журнал Тахиатас-3',
      'Журнал Тахиатас-4',
      'Журнал Тахиатас-5'
    ],
    coordinates: { lat: 41.3111, lng: 60.8333 },
    address: 'Тахиатас, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Ургенч': {
    journals: [
      'Журнал Ургенч-1',
      'Журнал Ургенч-2',
      'Журнал Ургенч-3',
      'Журнал Ургенч-4',
      'Журнал Ургенч-5'
    ],
    coordinates: { lat: 41.5500, lng: 60.6333 },
    address: 'Ургенч, Xorazm viloyati',
    phone: '+998 62 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Хива': {
    journals: [
      'Журнал Хива-1',
      'Журнал Хива-2',
      'Журнал Хива-3',
      'Журнал Хива-4',
      'Журнал Хива-5'
    ],
    coordinates: { lat: 41.3783, lng: 60.3639 },
    address: 'Хива, Xorazm viloyati',
    phone: '+998 62 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Беруни': {
    journals: [
      'Журнал Беруни-1',
      'Журнал Беруни-2',
      'Журнал Беруни-3',
      'Журнал Беруни-4',
      'Журнал Беруни-5'
    ],
    coordinates: { lat: 41.6911, lng: 60.7525 },
    address: 'Беруни, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Актобе': {
    journals: [
      'Журнал Актобе-1',
      'Журнал Актобе-2',
      'Журнал Актобе-3',
      'Журнал Актобе-4',
      'Журнал Актобе-5'
    ],
    coordinates: { lat: 43.0500, lng: 58.8500 },
    address: 'Актобе, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Ходжейли': {
    journals: [
      'Журнал Ходжейли-1',
      'Журнал Ходжейли-2',
      'Журнал Ходжейли-3',
      'Журнал Ходжейли-4',
      'Журнал Ходжейли-5'
    ],
    coordinates: { lat: 42.4000, lng: 59.4500 },
    address: 'Ходжейли, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Шуманай': {
    journals: [
      'Журнал Шуманай-1',
      'Журнал Шуманай-2',
      'Журнал Шуманай-3',
      'Журнал Шуманай-4',
      'Журнал Шуманай-5'
    ],
    coordinates: { lat: 42.7167, lng: 59.6667 },
    address: 'Шуманай, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Чимбай': {
    journals: [
      'Журнал Чимбай-1',
      'Журнал Чимбай-2',
      'Журнал Чимбай-3',
      'Журнал Чимбай-4',
      'Журнал Чимбай-5'
    ],
    coordinates: { lat: 42.9333, lng: 59.7833 },
    address: 'Чимбай, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Каракалпакстан': {
    journals: [
      'Журнал Каракалпакстан-1',
      'Журнал Каракалпакстан-2',
      'Журнал Каракалпакстан-3',
      'Журнал Каракалпакстан-4',
      'Журнал Каракалпакстан-5'
    ],
    coordinates: { lat: 42.5000, lng: 59.0000 },
    address: 'Каракалпакстан, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  },
  'Станция Кырккыз': {
    journals: [
      'Журнал Кырккыз-1',
      'Журнал Кырккыз-2',
      'Журнал Кырккыз-3',
      'Журнал Кырккыз-4',
      'Журнал Кырккыз-5'
    ],
    coordinates: { lat: 42.2500, lng: 59.2000 },
    address: 'Кырккыз, Qoraqalpog\'iston Respublikasi',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Faol'
  }
};

const Stations = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showJournals, setShowJournals] = useState(false);

  const handleStationClick = (station) => {
    setSelectedStation(station);
    setShowJournals(true);
  };

  const handleBackToStations = () => {
    setSelectedStation(null);
    setShowJournals(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        {!showJournals ? (
          <>
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
              Станции
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stations.map((station, index) => (
                <div
                  key={index}
                  onClick={() => handleStationClick(station)}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-white text-center">
                    {station}
                  </h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={handleBackToStations}
                className="flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Станцияларга qaytish
              </button>
            </div>

            {/* Station Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
              {selectedStation}
            </h1>

            {/* Journals Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Журналлар
              </h2>
              <p className="text-gray-300 mb-8">
                Bu stansiyaga tegishli 5 ta jurnal
              </p>
            </div>

            {/* Journals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stationData[selectedStation]?.journals.map((journal, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl cursor-pointer border border-white/20"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {journal}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Jurnal #{index + 1}
                    </p>
                    <div className="mt-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                        Ko'rish
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Station Information */}
            <div className="mt-12 text-center">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">
                  Stansiya ma'lumotlari
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <p><strong>Manzil:</strong> {stationData[selectedStation]?.address}</p>
                    <p><strong>Telefon:</strong> {stationData[selectedStation]?.phone}</p>
                  </div>
                  <div>
                    <p><strong>Ish vaqti:</strong> {stationData[selectedStation]?.workingHours}</p>
                    <p><strong>Status:</strong> {stationData[selectedStation]?.status}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Stansiya joylashuvi
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 h-96 relative overflow-hidden">
                  {/* Map Placeholder with Station Location */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg relative">
                    {/* Map Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    {/* Station Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg mt-2 text-sm font-semibold whitespace-nowrap">
                        {selectedStation}
                      </div>
                    </div>

                    {/* Coordinates Display */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm">
                      <div>Lat: {stationData[selectedStation]?.coordinates.lat}</div>
                      <div>Lng: {stationData[selectedStation]?.coordinates.lng}</div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                      <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Map Actions */}
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Google Maps'da ochish
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Navigatsiya
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stations;
