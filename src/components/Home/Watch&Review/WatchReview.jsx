import React from "react";
import "./WatchReview.css";

const videoSources = [
  "https://cdn.shopify.com/videos/c/o/v/abac8a1599884441bafbf8333c388260.mp4",
  "https://video.gumlet.io/64661d8e673536e1fe9044e2/67347450ba34cfe064c6243a/main.mp4",
  "https://cdn.shopify.com/videos/c/o/v/41297fb09ea74b3d9248655c7c2ab759.mp4",
  "https://cdn.shopify.com/videos/c/o/v/a89b425e6c274d9cae5a9b7480b38c37.mp4",
  "https://cdn.shopify.com/videos/c/o/v/0ac479588eed40b9ae1e3a2784fc1e1a.mp4",
  "https://video.gumlet.io/64661d8e673536e1fe9044e2/67443f18c84c6b7e104a68fa/main.mp4",
  "https://video.gumlet.io/64661d8e673536e1fe9044e2/67443f2bc84c6b7e104a69ef/main.mp4",
  "https://video.gumlet.io/64661d8e673536e1fe9044e2/67443f4c080b60408c8f1bfd/main.mp4",
  "https://cdn.shopify.com/videos/c/o/v/dc260ad35494498abbf1e406aab4cd94.mp4",
  "https://cdn.shopify.com/videos/c/o/v/f361b122b6c941d7998e93308a573b18.mp4",
  "https://video.gumlet.io/64661d8e673536e1fe9044e2/673473efeea627f195ff1401/main.mp4",
];

const WatchReview = () => {
  return (
    <div className="watch_review">
      <div className="watch_review_row">
        {videoSources.map((src, index) => (
          <div className="review_video_box" key={index}>
            <video
              src={src}
              autoPlay
              muted
              loop
              preload="metadata"
              className="review_video"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchReview;

