"use client";
import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser, FaChevronDown } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import bgimage from '../../images/hero-bg-imag.jpg'

interface Guests {
  adults: number;
  rooms: number;
}

interface Filters {
  freeCancellation: boolean;
  fourStars: boolean;
  threeStars: boolean;
}

const HeroSection: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date>(new Date('2024-08-10'));
  const [checkOut, setCheckOut] = useState<Date>(new Date('2024-09-10'));
  const [guests, setGuests] = useState<Guests>({ adults: 2, rooms: 1 });
  const [filters, setFilters] = useState<Filters>({
    freeCancellation: false,
    fourStars: false,
    threeStars: false,
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search params:', { destination, checkIn, checkOut, guests, filters });
    // Here you would typically call an API or update app state
  };

  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="absolute inset-0 bg-black opacity-40 "></div>
      <div className=" relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Find the right hotel today</h1>
        <div className="w-full max-w-6xl bg-navy-900 p-6 rounded-lg shadow-lg bg-[#05367f]">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow ">
                <label className="block text-sm font-medium mb-1 text-white">Where do you want to stay?</label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter destination or hotel name"
                    className="pl-10 w-full"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-40">
                <label className="block text-sm font-medium mb-1 text-white">Check-in</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full  font-normal">
                      <FaCalendarAlt className="mr-2 h-4 w-4" />
                      {format(checkIn, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={(date: Date | undefined) => date && setCheckIn(date)}
                      initialFocus
                      className='text-gray-400'
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full md:w-40">
                <label className="block text-sm font-medium mb-1 text-white">Check-out</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full  font-normal">
                      <FaCalendarAlt className="mr-2 h-4 w-4" />
                      {format(checkOut, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={(date: Date | undefined) => date && setCheckOut(date)}
                      initialFocus
                      className='text-gray-400 px-3'
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full md:w-48">
                <label className="block text-sm font-medium mb-1 text-white">Guests and rooms</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left font-normal">
                      <span><FaUser className="inline mr-2" />{guests.adults} adults, {guests.rooms} room</span>
                      <FaChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex justify-between items-center">
                      <span>Adults</span>
                      <div>
                        <Button onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}>-</Button>
                        <span className="mx-2">{guests.adults}</span>
                        <Button onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}>+</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span>Rooms</span>
                      <div>
                        <Button onClick={() => setGuests(prev => ({ ...prev, rooms: Math.max(1, prev.rooms - 1) }))}>-</Button>
                        <span className="mx-2">{guests.rooms}</span>
                        <Button onClick={() => setGuests(prev => ({ ...prev, rooms: prev.rooms + 1 }))}>+</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-white">Popular filters:</span>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="free-cancellation"
                    checked={filters.freeCancellation}
                    onCheckedChange={(checked: boolean) => setFilters(prev => ({ ...prev, freeCancellation: checked }))}

                  />
                  <label htmlFor="free-cancellation" className="text-white">Free cancellation</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="4-stars"
                    checked={filters.fourStars}
                    onCheckedChange={(checked:boolean) => setFilters(prev => ({ ...prev, fourStars: checked }))}
                  />
                  <label htmlFor="4-stars" className="text-white">4 stars</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="3-stars"
                    checked={filters.threeStars}
                    onCheckedChange={(checked:boolean) => setFilters(prev => ({ ...prev, threeStars: checked }))}
                  />
                  <label htmlFor="3-stars" className="text-white">3 stars</label>
                </div>
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Search hotels →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
