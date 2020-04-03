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

        [Fact]
        public void GetById_Should_Return_Chosen_Watchlist()
        {
            //arrange
            var id = 2;
            var firstWatchlist = new Watchlist(1, "test review", "test rating");
            var secondWatchlist = new Watchlist(1, "test review", "test rating");
            var expectedWatchlists = new List<Watchlist>();
            expectedWatchlists.Add(firstWatchlist);
            expectedWatchlists.Add(secondWatchlist);

            watchlistMockRepo.GetById(id).Returns(secondWatchlist);

            //act
            var result = testController.Get(id);

            //assert
            Assert.Equal(secondWatchlist, result);
        }
        [Fact]
        public void Post_Creates_New_Watchlist()
        {
            // arrange
            var newWatchlist = new Watchlist(1, "test review", "test rating");
            var watchlistList = new List<Watchlist>();

            // Use When..Do to substitute for methods that don't return a value, like the Repository method Create()
            // When() allows us to call the method on the substitute and pass an argument
            // Do() allows us to pass a callback function that executes when the method is called
            watchlistMockRepo.When(t => t.Create(newWatchlist))
                .Do(t => watchlistList.Add(newWatchlist));

            watchlistMockRepo.GetAll().Returns(watchlistList);

            // act
            var result = testController.Post(newWatchlist);

            // assert
            Assert.Contains(newWatchlist, result);
        }

    }
}
