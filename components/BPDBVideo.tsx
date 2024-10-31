const YouTubeEmbed = () => {
  return (
    <div>
      <h1 className="heading-text mb-4 !text-center md:mb-8">
        Learn More about BPDB Pre Paid Metering
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "90%",
            paddingBottom: "45%",
            maxWidth: "100%",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/ksch44-8S-Q?si=CcJWiQQDqaGRXSQL?rel=0&modestbranding=1&mute=0&autoplay=1&vq=hd1080`}
            title="BPDB Pre Paid Metering System"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
