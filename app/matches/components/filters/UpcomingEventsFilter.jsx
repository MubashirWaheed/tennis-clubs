"use client";
import RadioGroup from '@/components/ui/inputFields/RadioGroup'

const UpcomingEventsFilter = () => {
  const options = [
    { label: "Next 30 Days", value: "Next 30 Days" },
    { label: "Next 90 Days", value: "Next 90 Days" },
    { label: "Next 120 Days", value: "Next 120 Days" },
    { label: "Upcoming Events", value: "Upcoming Events" },
    { label: "Past Events", value: "Past Events" },
    { label: "Custom", value: "Custom" }
  ];

  return (
    <div className='w-[400px]'>
      <div className='w-full flex item-center justify-between'>
        <h5 className='h5 f-Abril text-[#13013C]'>Date</h5>
        <button className='outline-none border-none f14 lh30 fw700'>Clear</button>
      </div>
      <RadioGroup direction="column" options={options} />
    </div>
  )
}

export default UpcomingEventsFilter