class DataConverter {
  convert(fullData) {
    return {
      quote: fullData.quote,
      author: fullData.author
    };
  }
}

export default DataConverter;
