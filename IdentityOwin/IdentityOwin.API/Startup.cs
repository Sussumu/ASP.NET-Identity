using Microsoft.Owin;
using Owin;
using System.Web.Http;

// Make server starts from here
// We also deleted global.asax as we don't need it anymore
[assembly: OwinStartup(typeof(IdentityOwin.API.Startup))]
namespace IdentityOwin.API
{
    public class Startup
    {
        public void Configuration (IAppBuilder app)
        {

            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
            app.UseWebApi(config);
        }
    }
}