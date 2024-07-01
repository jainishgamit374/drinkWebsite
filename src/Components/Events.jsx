import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Event from './Event';
import { EffectFade, Autoplay, FreeMode } from 'swiper/modules';
const Events = () => {
  const events = [
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },,
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },,
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },,
        {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    }
  ];
  return (
    <div className="min-h-screen w-full relative">
      <h1 className="monument text-7xl pt-20 text-center">Events</h1>
      <p className="monument text-xs pb-20 text-center">
        Discover worldwide Red Bull events.
      </p>
      <Swiper
        modules={[EffectFade, Autoplay, FreeMode]}
        autoplay={{ delay: 3000 }}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={4}
        className="h-[70vh] w-full flex gap-10 pb-10 px-10"
      >
        {
          events.map((item, index) => (
            <SwiperSlide key={index}>
              <Event data={item} key={index}></Event>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Events;
