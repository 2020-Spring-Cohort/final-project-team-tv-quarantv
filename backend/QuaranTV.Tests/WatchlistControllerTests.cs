using QuaranTV.Controllers;
using QuaranTV.Models;
using QuaranTV.Repositories;
using System.Collections.Generic;
using System;
using Xunit;
using NSubstitute;
using System.Linq;

namespace QuaranTV.Tests
{
    public class WatchlistControllerTests
    {
        WatchlistController testController;
        IRepository<Watchlist> watchlistMockRepo;

        public WatchlistControllerTests()
        {
            watchlistMockRepo = Substitute.For<IRepository<Watchlist>>();
            testController = new WatchlistController(watchlistMockRepo);
        }

        [Fact]
        public void Get_Returns_Count_Of_Watchlists()
        {
            // arrange
            var expectedWatchlists = new List<Watchlist>()
            {
              new Watchlist(1, "test review", "test rating"),
              new Watchlist(2,"test review", "test rating" )
            };

            //albumList
            watchlistMockRepo.GetAll().Returns(expectedWatchlists);

            // act
            var result = testController.Get();
            var countOfWatchlists = result.Count();

            // assert
            Assert.Equal(2, countOfWatchlists);
        }

    }
}
