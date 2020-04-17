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
    public class TvShowControllerTests
    {
        TvShowController testController;
        IRepository<TvShow> tvShowMockRepo;

        public TvShowControllerTests()
        {
            tvShowMockRepo = Substitute.For<IRepository<TvShow>>();
            testController = new TvShowController(tvShowMockRepo);
        }

        [Fact]
        public void Get_Returns_Count_Of_TvShows()
        {
            // arrange
            var expectedTvShows = new List<TvShow>()
            {
              new TvShow(1, "Test Show Title", "test.img", "Test Season", "Test Viewer Discretion"),
              new TvShow(2, "Test Show Title", "test.img", "Test Season", "Test Viewer Discretion")
            };

            //albumList
            tvShowMockRepo.GetAll().Returns(expectedTvShows);

            // act
            var result = testController.Get();
            var countOfTvShows = result.Count();

            // assert
            Assert.Equal(2, countOfTvShows);
        }

        [Fact]
        public void GetById_Should_Return_Chosen_TvShow()
        {
            //arrange
            var id = 2;
            var firstTvShow = new TvShow(1, "Test Show Title", "test.img", "Test Season", "Test Viewer Discretion");
            var secondTvShow = new TvShow(2, "Test Show Title", "test.img", "Test Season", "Test Viewer Discretion");
            var expectedTvShows = new List<TvShow>();
            expectedTvShows.Add(firstTvShow);
            expectedTvShows.Add(secondTvShow);

            tvShowMockRepo.GetById(id).Returns(secondTvShow);

            //act
            var result = testController.Get(id);

            //assert
            Assert.Equal(secondTvShow, result);
        }
    }
}
