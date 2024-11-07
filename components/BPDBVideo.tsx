const VideoEmbed = () => {
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
            src={`https://drive.google.com/file/d/1V3fOSFWBLwi_49q3UppmMJs35zTuC8yd/preview`}
            title="BPDB Pre Paid Metering System"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

export default VideoEmbed;
