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

            //watchlistList
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

        [Fact]
        public void Delete_Removes_Watchlist_Object()
        {
            // arrange
            var watchlistId = 1;
            var deletedWatchlist = new Watchlist(watchlistId, "test review", "test rating");
            var watchlistList = new List<Watchlist>()
            {
                deletedWatchlist,
                new Watchlist(2, "test review", "test rating")
            };
            // our controller's Delete() action is dependent on the Repository's
            // GetById(), Delete(), and GetAll() actions- they all need to be mocked
            watchlistMockRepo.GetById(watchlistId).Returns(deletedWatchlist);
            watchlistMockRepo.When(d => d.Delete(deletedWatchlist))
                .Do(d => watchlistList.Remove(deletedWatchlist));
            watchlistMockRepo.GetAll().Returns(watchlistList);
            // act
            var result = testController.Delete(watchlistId);
            // assert
            // Below is an alternative to Assert.DoesNotContain(deletedTodo, result), 
            // which does not work in all cases
            Assert.DoesNotContain(deletedWatchlist, result);
        }

        [Fact]
        public void Put_Updates_Watchlist_Reviews()
        {
            // arrange
            var originalWatchlist = new Watchlist(1, "test review", "test rating");
            var expectedWatchlist = new List<Watchlist>()
            {
                originalWatchlist
            };
            var updatedWatchlist = new Watchlist(2, "test updated review", "test rating");

            // What are the dependencies for the controller's Update action?
            // They are Update() and GetAll()
            // To mock Update() we need to modify our fake list with the Remove() then Add() methods 
            watchlistMockRepo.When(t => watchlistMockRepo.Update(updatedWatchlist))
                .Do(Callback.First(t => expectedWatchlist.Remove(originalWatchlist))
                .Then(t => expectedWatchlist.Add(updatedWatchlist)));
            watchlistMockRepo.GetAll().Returns(expectedWatchlist);

            // act
            var result = testController.Put(updatedWatchlist);

            // assert
            // Below is an alternative to Assert.Equal(expectedTodos, result.ToList());
            //Assert.All(result, item => Assert.Contains("First Watchlist Update", item.Title));
            Assert.Equal(expectedWatchlist, result.ToList());
        }
    }
}
