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
    public class UserControllerTests
    {
        UserController testController;
        IRepository<User> userMockRepo;

        public UserControllerTests()
        {
            userMockRepo = Substitute.For<IRepository<User>>();
            testController = new UserController(userMockRepo);
        }

        [Fact]
        public void Get_Returns_Count_Of_Users()
        {
            // arrange
            var expectedUsers = new List<User>()
            {
              new User(1, "Tatyana", "tatyana.jpg"),
              new User(2, "Erin", "erin.jpg")
            };

            //albumList
            userMockRepo.GetAll().Returns(expectedUsers);

            // act
            var result = testController.Get();
            var countOfUsers = result.Count();

            // assert
            Assert.Equal(2, countOfUsers);
        }

        [Fact]
        public void GetById_Should_Return_Chosen_User()
        {
            //arrange
            var id = 2;
            var firstUser = new User(1,"Tatyana","tatyana.jpg");
            var secondUser = new User(2,"Erin","erin.jpg");
            var expectedUsers = new List<User>();
            expectedUsers.Add(firstUser);
            expectedUsers.Add(secondUser);

            userMockRepo.GetById(id).Returns(secondUser);

            //act
            var result = testController.Get(id);

            //assert
            Assert.Equal(secondUser, result);
        }
        [Fact]
        public void Post_Creates_New_User()
        {
            // arrange
            var newUser = new User(1, "Tatyana", "tatyana.jpg");
            var userList = new List<User>();

            // Use When..Do to substitute for methods that don't return a value, like the Repository method Create()
            // When() allows us to call the method on the substitute and pass an argument
            // Do() allows us to pass a callback function that executes when the method is called
            userMockRepo.When(t => t.Create(newUser))
                .Do(t => userList.Add(newUser));

            userMockRepo.GetAll().Returns(userList);

            // act
            var result = testController.Post(newUser);

            // assert
            Assert.Contains(newUser, result);
        }

    }
}
